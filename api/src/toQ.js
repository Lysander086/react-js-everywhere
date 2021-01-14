const { gql } = require("apollo-server-express");


query{
  users{
     id
      username
      email
      avatar
      notes
      favorites
  }
}


newNote


signed user

mutation {
  signUp(
    username: "BeeBoop",
    email: "robot@example.com",
    password: "NotARobot10010!"
  )
}

query{
  signIn(
     username: "BeeBoop",
      email: "robot@example.com",
      password: "NotARobot10010!"
  )
}


token

 "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmZmYwOTJiYmI3ZGQyNTljODFhZDZkNCIsImlhdCI6MTYxMDU1MTAzNn0.ccM2Tae7LCfJ5li0FwTAJDWeA5v27bdgriNr_zRo47Q"
