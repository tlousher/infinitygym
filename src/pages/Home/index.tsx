import React from 'react';
import {Col, Row} from "antd";
import HomeCarousel from "./HomeCarousel";
import {BoxingGlovesIcon, GymAppleLightIcon, GymDumbbellLightIcon, GymGlovesLightIcon} from "../../config/icons";
import Image from "../../components/Image";
import styles from "./styles.module.scss";

const Line = ({left=false}) => {
    return (
        <span
            style={{
                display: 'inline-block',
                width: '5%',
                marginRight: !left ? 10 : 0,
                marginLeft: left ? 10 : 0,
                borderBottom: '1px solid var(--text-color)'
            }}
        />
    );
}

const ZoneTitle = ({lineup, title, description}: {lineup: React.ReactNode, title: React.ReactNode, description: React.ReactNode}) => {
    return (
        <Col span={24} className={'my-6'}>
            <Row>
                <Col span={24} className={'flex justify-center items-center mb-2'}>
                    <Line /><span className={'text-xs'}>{lineup}</span><Line left={true} />
                </Col>
                <Col span={24}>
                    <div className={'flex justify-center items-center'}>
                        <span className={'text-xl font-bold'}>{title}</span>
                    </div>
                </Col>
                <Col span={24}>
                    <div className={'flex justify-center items-center'}>
                        <span className={'text-xs'}>{description}</span>
                    </div>
                </Col>
            </Row>
        </Col>
    )
}

const DescriptiveIcon = ({icon, description, title}: {icon: React.ReactNode, description: React.ReactNode, title: React.ReactNode}) => {
    return (
        <Row className={'flex justify-center items-center text-center'}>
            <Col span={24}>{icon}</Col>
            <Col className={'text-2xl font-bold my-2'}>
                {title}
            </Col>
            <Col className={'mx-4'}>{description}</Col>
        </Row>
    )
}

const HoveringImage = ({icon, title, description, image}: {
    description: React.ReactNode,
    icon: React.ReactNode,
    image: string,
    title: React.ReactNode
}) => {
    return (
        <Col className={styles.imageContainer} xs={24} md={12} lg={8}>
            <Image
                src={`${process.env.PUBLIC_URL}/resources/images/${image}.jpg`}
                style={{maxWidth: 250, maxHeight:250}}
                footer={
                    <div className={styles.imageFooter}>
                        <div className={`${styles.footerCircle} flex justify-center items-center`}>
                            {icon}
                        </div>
                        <div className={styles.footerText}>
                            {title}
                        </div>
                        <div className={styles.footerDescription}>
                            <div className={'font-bold text-base'}>{title}</div>
                            {description}
                        </div>
                    </div>
                }
            />
        </Col>
    )
}

const Home = () => {
    return (
        <div>
            <HomeCarousel />
            <div className={'flex justify-center'}>
                <div style={{width: '80%'}}>
                    <Row gutter={[16, 24]}>
                        <ZoneTitle
                            lineup={'Somos Infinite'}
                            title={'Estamos para ayudarte'}
                            description={'En nuestro gimnasio, las posibilidades para superarte son infinitas'}
                        />
                        <Col xs={24} md={12} lg={8}>
                            <DescriptiveIcon
                                icon={<GymAppleLightIcon style={{fontSize: 200}} />}
                                title={'Equilibrio'}
                                description={'Ven y llena tus días de energía y vitalidad. Nuestros expertos te guiarán para alcanzar el equilibrio perfecto entre mente y cuerpo, ayudándote a lograr tus metas y sentirte mejor que nunca.'}
                            />
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <DescriptiveIcon
                                icon={<GymGlovesLightIcon style={{fontSize: 200}} />}
                                title={'Inclusión'}
                                description={'En nuestro gimnasio, el ejercicio es inclusivo y divertido. Entrena en un ambiente acogedor rodeado de personas inspiradoras y alcanza tus metas de forma más fácil y disfrutable.'}
                            />
                        </Col>
                        <Col xs={24} md={12} lg={8}>
                            <DescriptiveIcon
                                icon={<GymDumbbellLightIcon style={{fontSize: 200}} />}
                                title={'Compromiso'}
                                description={'Nuestros entrenadores están comprometidos en ayudarte a alcanzar tus metas más desafiantes. Con su guía y motivación, aprenderás a cultivar el esfuerzo y la constancia necesarios para alcanzar el éxito.'}
                            />
                        </Col>
                        <ZoneTitle
                            lineup={'Se Infinite'}
                            title={'Busca tu camino'}
                            description={'Tenemos varios estilos de entrenamiento para que encuentres el que más se adapte a ti'}
                        />
                        <HoveringImage description={'Arte marcial de defensa personal y sumisión.'} icon={<BoxingGlovesIcon style={{fontSize: 30}} />} image={'jujitsu_ai'} title={'Jujitsu'} />
                        <HoveringImage description={'Deporte de combate con golpes y patadas.'} icon={<BoxingGlovesIcon style={{fontSize: 30}} />} image={'kickboxing_ai'} title={'Kickboxing'} />
                        <HoveringImage description={'Arte marcial tailandés de ocho extremidades.'} icon={<BoxingGlovesIcon style={{fontSize: 30}} />} image={'muaythai_ai'} title={'Muay Thai'} />
                        <HoveringImage description={'Lucha cuerpo a cuerpo en busca de dominación.'} icon={<BoxingGlovesIcon style={{fontSize: 30}} />} image={'olimpic_ai'} title={'Lucha olímpica'} />
                        <HoveringImage description={'Deporte de combate mixto con múltiples disciplinas.'} icon={<BoxingGlovesIcon style={{fontSize: 30}} />} image={'mma_ai'} title={'MMA'} />
                        <ZoneTitle
                            lineup={'Infinite Kids'}
                            title={'Crecimiento y diversión'}
                            description={'Para los mas pequeños de la casa, tenemos un programa de entrenamiento diseñado para que se diviertan y desarrollen habilidades físicas y mentales.'}
                        />
                        <HoveringImage description={'Arte marcial de defensa personal.'} icon={<BoxingGlovesIcon style={{fontSize: 30}} />} image={'kids1'} title={'Jujitsu Kids'} />
                        <HoveringImage description={'Deporte de combate con golpes y patadas.'} icon={<BoxingGlovesIcon style={{fontSize: 30}} />} image={'kids2'} title={'Kickboxing Kids'} />
                        <HoveringImage description={'Campamento de verano de artes marciales.'} icon={<BoxingGlovesIcon style={{fontSize: 30}} />} image={'kids3'} title={'Campamento Vacacional'} />
                    </Row>
                </div>
            </div>
        </div>
    );
};

export default Home;