import React, { useState } from "react";
import { Service } from "../../components/Service/Service";
import "./Services.css"
import { CONSULTATION_ROUTE } from "../../utils/constants";
import { Link } from "react-scroll";
import { useMediaQuery } from "react-responsive";

export function Services(){

   const servicesArr = [{url:"img/service7.png",title:"Банкротство",text:"Поможем вам решить вопросы связанные с банкротством."},
    {url:"img/service5.png",title:"Уголовные дела",text:"Прекратим уголовное дело или переквалифицируем на менее тяжкую статью."},
    {url:"img/service6.png",title:"Семейные дела",text:"Поможем решить конфликт на более ранних стадиях."},
    {url:"img/service2.png",title:"Административные дела",text:"Окажем юридические услуги по защите интересов по спорам о привлечении к административной ответственности."},
    {url:"img/service3.png",title:"Налоговые споры",text:"Поможем вам в вопросах связанных с отказом возмещения НДС."},
    {url:"img/service8.png",title:"Оформление сделок",text:"Мы готовы предложить вам индивидуальный подход и профессиональную помощь. "}
   ];

    const S1 = useMediaQuery({ maxWidth: 1200 });
    const S2 = useMediaQuery({ maxWidth: 992 });


    return(
        <div className="ServicesDiv">
            
            <h1>Мои услуги</h1>
            <div className="firstServiceBlock" >
                {servicesArr.map((e) => 
                    <Service Url = {e.url} Title={e.title} Text = {e.text}/>)}
            </div>
        </div>
    );
}