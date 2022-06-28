<!-- In the name of Allah -->

### **APPLICATION RUN PROCEDURE**

---
---
* Install SqlServer
* SqlServer authentication configure as "Windows Authentication"
* Install .NET 6.x.x SDK
* Install node.js letest 
* Clone this Repository
* Open a Terminal
* Change terminal directory to S3_TEST_APP/Backend/application
* Run "dotnet restore application"csproj
* Run Command "dotnet ef database update
* Run "dotnet run"
* Dotnet server will run
* Open browser and go to http://127.0.0.1:5212/swagger 
* If u found open api specification for backend then backend is Fine.
* Sign up using swagger at /user/add
```json
{
    "name":"xem",
    "password":"xem"
}
```

* open another Terminal
* change directory to S3_TEST_APP/Frontend/src
* Run "npm start"
* go to http://localhost:3000
* That's it.

