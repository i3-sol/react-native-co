from django.db import models
from urllib.parse import unquote

class ModelQuerySetClass(models.QuerySet):
    def params(self, view):
        query = self
        request = view.request

        if ("pk" in view.kwargs == False) :
            #limitの指定
            limit:int = 100

            if request.query_params.get("limit"):
                if (request.query_params.get("limit").isnumeric()):
                    limit = int(request.query_params.get("limit"))

            if (limit > 100):
                #例外を除き100件以上にはさせない
                limit = 100

            query = query[:limit]



        #フィールドの設定
        fields = self.default_field

        if (request.query_params.getlist("fields[]")) :
            fields = []

            for value in request.query_params.getlist("fields[]"):
                fields.append(value)

        query = query.only(*fields)
        
        if view.request.query_params.getlist("wheres[]"):   
            for value in request.query_params.getlist("wheres[]"):
               types = unquote(value).split(':')

               if (types[1]) :
                   query = eval("self.where" + str(types[0]).capitalize() + "('" + types[1] + "')")                   
               else :
                   query = eval("self.where" + str(types[0]).capitalize() + "()")                   

        return query