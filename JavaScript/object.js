        //object Literal
        var student = {
            name: "sachin",
            age : "23",
            Gender : "M",
            hobbies : ['Sports', 'Music'],
            address:{                       //object under the object
                city: 'Mysore',
                State: 'Karnataka'
            }
        };
        console.log(typeof(student))
        console.log(student.name)
        console.log(student.address.city)
        student.id = 104310

        for (const key in student) {
           const ele = student[key]
           console.log(key + " =  " + ele)
           console.log("<br>")
           console.log(typeof(key))
        }
        var student1 = {
            name: 'Ayush', id: 20
        }
        console.log(typeof(student1))
        console.log(student.name)
