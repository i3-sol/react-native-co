# Pythonのイメージを指定
FROM python:3
# PYTHONDONTWRITEBYTECODEとPYTHONUNBUFFEREDはオプション
# pycファイル(および__pycache__)の生成を行わないようにする
ENV PYTHONDONTWRITEBYTECODE=1
# 標準出力・標準エラーのストリームのバッファリングを行わない
ENV PYTHONUNBUFFERED=1
# コンテナのワークディレクトリを/codeに指定
WORKDIR /code/django
# ローカルのrequirements.txtをコンテナの/codeフォルダ直下に置く
COPY django/requirements.txt requirements.txt

# コンテナ内でpipをアップグレード
RUN pip install --upgrade pip
# pip install -r requirements.txtを実行
RUN pip install -r requirements.txt

#COPY entrypoint.sh /code/entrypoint.sh

# entrypoint.shに実行権限を付与
#RUN chmod 777 entrypoint.sh