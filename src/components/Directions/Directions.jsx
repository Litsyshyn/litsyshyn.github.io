import React from "react";
import "./Directions.scss";


const Directions = () => {
    return (
        <div className="directions">
            <div className="frame">
                <h1 className="title">Основні напрями діяльності Асоціації:</h1>
                <ul className="directions-description mb-5">
                    <li className="descriptions-text ">Прийняття участі у розробці законопроектів, стандартів і вимог, що стосуються психологічного консультування та травматерапії;</li>
                    <li className="descriptions-text">Впровадження етичних стандартів клінічної практики;</li>
                    <li className="descriptions-text">Організація навчання, проведення курсів, семінарів, зустрічей, лекцій та інших освітніх програм в Україні відповідно до міжнародних стандартів;</li>
                    <li className="descriptions-text">Сприяння підвищенню професійного рівня спеціалістів в області психологчного консультування та травматерапії у відповідності до міжнародних стандартів;</li>
                    <li className="descriptions-text">Впровадження нових методів психології у сфері психологічного консультування та травматерапії;</li>
                    <li className="descriptions-text">Сприяння інформаційному забезпеченню психологів, обміну досвідом дослідницької і практичної діяльності, освоєння прогресивних форм роботи;</li>
                    <li className="descriptions-text">Впровадження та підтримка дослідницьких проектів з питань психологічного консультування та травматерапії;</li>
                    <li className="descriptions-text">Розробка й реалізація проектів і програм, що передбачають надання правової, соціальної та гуманітарної допомоги громадянам України, громадянам інших держав та особам без громадянства;</li>
                    <li className="descriptions-text">Розвиток культури звернення за психологічною допомогою.</li>
                </ul>
            </div>
        </div>
    )
};

export default Directions;