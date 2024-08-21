from rest_framework  import serializers

class SerializersClass(serializers.ModelSerializer):

    def params(self, request):
        #フィールドの設定
        fields = ["id",]

        if (request.query_params.getlist("fields[]")) :
            fields = []

            for value in request.query_params.getlist("fields[]"):
                fields.append(value)

        #fields.append("chat_image_file_name_thumbnail")
        self.Meta.fields = fields
        

        return self

    def to_representation(self, instance):
        ret = super().to_representation(instance)
        
        request = self.context.get('request')

        if (request.query_params.getlist("joins[]")) :
            for index in request.query_params.getlist("joins[]"):
                if eval("instance." + index) :
                    data = eval("instance." + index + ".__dict__")

                    ret[index] = {}
                    for value in self.joins[index] :
                        ret[index][value] = data[value]

        if (request.query_params.getlist("images[]")) :
            for index in request.query_params.getlist("images[]"):
                ret[index] = "{0}://{1}".format(request.scheme, request.get_host())
                ret[index]+= eval("instance." + index + ".url")

        return ret 


