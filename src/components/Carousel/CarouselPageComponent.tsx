import Carousel from ".";


const CarouselPageComponent = () => {

    return (
        <Carousel itemLength={3}>
            <Carousel.ItemList>
                <Carousel.Item page={0}></Carousel.Item>
                <Carousel.Item page={1}></Carousel.Item>
                <Carousel.Item page={2}></Carousel.Item>
            </Carousel.ItemList>
            <Carousel.Navigator/>
            <Carousel.Indicator/>
        </Carousel>
    )
}

export default CarouselPageComponent;