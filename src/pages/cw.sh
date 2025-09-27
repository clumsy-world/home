$ curl --proto "=https" --tlsv1.2 https://sh.clumsy.world -sSf | sh'

# version
cw
cw -v
cw --version
# cwコマンドのバージョン
> 0.0.1

# help
cw
cw -h
cw --help

# clum
cw clum
cw clum -v
cw clum --version
# clum言語のバージョン
> 0.0.1

# 新規project
cw clum new .
# project 名は lower-kebab-case 以外だとエラーにする
cw clum new project-name

# 開発
cw clum dev
cw clum dev:watch
cw clum build