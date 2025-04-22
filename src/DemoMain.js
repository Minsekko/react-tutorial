import { Component } from "react";
import DemoItem from "./DemoItem";


export default function DemoMain() {

    const language = {
        "title": "C",
        "description": "시스템 프로그래밍의 기초. 운영체제와 임베디드 시스템에 활용"
    }

    const datas = [
        { title: "R", description: "통계, 데이터분석, 시각화 특화 언어. 연구분야에서 자주 쓰임" },
        { title: "Swift", description: "Apple IOS 개발용 언어." }
    ];

    const components = datas.map(function (elm) {
        return <DemoItem title={elm.title} description={elm.description} />
    });

    const GO = 'Kotlin'

    return (
        <main class="container">
            <h2>대표적인 언어와 그 특징</h2>
            <div class="card-list">
                <DemoItem title={datas[0].title} description={datas[0].description} />
                <DemoItem title={datas[1].title} description={datas[1].description} />

                {
                    components
                }

                {
                    datas.map(function (elm) {
                        return <DemoItem title={elm.title} description={elm.description} />
                    })
                }

                <DemoItem title="python" />
                <DemoItem description="안정성과 확장성에 강한 객체지향 언어. 백엔드, 안드로이드 등에서 활약." />
                <DemoItem title="language.title" description="language.description" />
                <DemoItem title="{language.title}" description="{language.description}" />
                <DemoItem title={language.title} description={language.description} />
                <DemoItem title={'GO'} />
                {/*<DemoItem title={GO} />   이렇게 쓰면 변수로 사용되서 터짐*/}
            </div>
        </main>
    );
}