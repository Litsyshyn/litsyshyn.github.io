class Dummdata {
    navbar=[
        "головна",
        "про асоціацію",
        "членство",
        "календар",
        "новини",
        "партнери",
        "сертифікація",
        "освіта",
        "контакти",
    ]

    jumbo={
        title: "Професійні стандарти. Етика. Адвокація.",
        text:"Головною метою Асоціації є здійснення та захист прав і свобод, задоволення суспільних, соціальних, культурних та інших інтересів членів, зокрема об’єднання зусиль членів Організації задля сприяння розвитку травматерапії шляхом психологічного консультування та захисту суспільних інтересів.",
        buttons:[
            {id:"register",label:"Вступити до АПКТ",href:"/"},
            {id:"payment",label: "Оплата онлайн", href:"/"}
        ],
        events:[
            {name:"ThanksGiven", date:"30.10.2020", description:"Placeholder Назва подіі", href:"/"   },
            {name:"Christmas", date:"30.11.2020", description:"Placeholder Назва подіі", href:"/"   },
            {name:"New Year", date:"30.10.2020", description:"Placeholder Назва подіі", href:"/"   },
        ]
    }
}

const dumdata = new Dummdata()
export default dumdata