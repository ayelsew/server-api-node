
header="Content-Type: application/json"
param='{"title":"Um titulo qualquer","description":"New_data jju giu ghj kj gkgjgkj kjgjkg kgj kjghjgk "}'
method="POST"
url="http://localhost:3000/colocar"


echo Testando API
echo --------------------------------------
echo "Cabeçalho "$header
echo "Parâmetros "$param
echo "Metodo "$method
echo "Endereço "$url
echo --------------------------------------
echo Resultado:
echo
curl -d "$param" -H "$header" -X "$method" "$url"
echo