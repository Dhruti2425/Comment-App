import Carousel from 'react-bootstrap/Carousel';

function Slider() {


    let sliderSlide = [
        {
            id: 1,
            image: require('../assets/images/img-hero1.jpg'),
            title: 'The perfect design for your website',
            des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
            link: 'www.google.com'
        },
        {
            id: 2,
            image: require('../assets/images/img-hero2.jpg'),
            title: 'Enjoy the Difference',
            des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
            link: 'www.google.com'
        },
        {
            id: 3,
            image: require('../assets/images/img-hero3.jpg'),
            title: 'Start Your Future Financial Plan',
            des: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab suscipit dicta nulla. Consequuntur obcaecati officiis, labore doloribus non tempore impedit consequatur ab dolor. Explicabo quam repellendus vero omnis, nisi odio!',
            link: 'www.google.com'
        }
    ]

    return (
        <section id="home" className="hero-block">
            <Carousel>
                {sliderSlide.map((v, i) => {
                    return (
                        <Carousel.Item>
                            <img src={v.image} />
                            <Carousel.Caption>
                                <h2>{v.title}</h2>
                                <p>{v.des}</p>
                                <a href={v.link} className='btn btn-primary'>Learn More</a>
                            </Carousel.Caption>
                        </Carousel.Item>
                    )
                })}
            </Carousel>
        </section>
    )
}

export default Slider;