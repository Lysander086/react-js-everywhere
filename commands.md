- test request ( get response in ./response.html)

    curl -X POST -H "Content-Type: application/json" --data '{"query": "{ notes { id } }" }' https://lys-js-everywhere.herokuapp.com/api