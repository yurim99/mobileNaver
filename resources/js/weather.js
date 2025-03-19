document.addEventListener("DOMContentLoaded", async function () {
    const apiKey = '4a25235891e03dd674f2b7ba12cbf13a';
    const cities = [
        { english: 'Seoul', korean: '서울' },
        { english: 'Busan', korean: '부산' },
        { english: 'Incheon', korean: '인천' },
        { english: 'Daegu', korean: '대구' },
        { english: 'Gwangju', korean: '광주' },
        { english: 'Daejeon', korean: '대전' },
        { english: 'Ulsan', korean: '울산' },
        { english: 'Jeju', korean: '제주' },
        { english: 'Suwon', korean: '수원' },
        { english: 'Goyang', korean: '고양' },
        { english: 'Seongnam', korean: '성남' },
        { english: 'Jeonju', korean: '전주' },
        { english: 'Changwon', korean: '창원' },
        { english: 'Pohang', korean: '포항' },
        { english: 'Cheongju', korean: '청주' },
        { english: 'Andong', korean: '안동' },
        { english: 'Ansan', korean: '안산' },
        { english: 'Cheonan', korean: '천안' },
        { english: 'Wonju', korean: '원주' },
        { english: 'Iksan', korean: '익산' },
        { english: 'Pyeongtaek', korean: '평택' },
        { english: 'Gangneung', korean: '강릉' },
        { english: 'Jeongeup', korean: '정읍' },
        { english: 'Mokpo', korean: '목포' },
        { english: 'Yeosu', korean: '여수' },
        { english: 'Sokcho', korean: '속초' },
        { english: 'Naju', korean: '나주' },
        { english: 'Bucheon', korean: '부천' }
        // { english: 'Gimpo', korean: '김포' },
        // { english: 'Gwangmyeong', korean: '광명' },
    ];

    const weatherStage = document.querySelector('.weather-swiper .swiper-wrapper');

    try {
        const weatherData = await Promise.all(
            cities.map(async (city) => {
                const url = `https://api.openweathermap.org/data/2.5/weather?q=${city.english}&appid=${apiKey}&units=metric&lang=kr`;
                const response = await fetch(url);
                const data = await response.json();
                const tempData = data.main.temp;
                const temperature = tempData < 10 ? tempData.toFixed(1) : tempData.toFixed();
                const weatherDate = data.weather[0].description;

                if (data.cod === 200) {
                    return {
                        korean: city.korean,
                        weather: weatherDate,
                        temperature: temperature
                    };
                } else {
                    return {
                        korean: city.korean,
                        temperature: 'N/A',
                        weather: '데이터 없음'
                    };
                }
            })
        );

        weatherData.forEach(({ korean, temperature, weather }) => {
            const feedWeatherWrap = document.createElement('div');
            feedWeatherWrap.classList.add('feed-weather', 'swiper-slide');
            feedWeatherWrap.innerHTML = `
                <div class="feed-weather__icon"></div>
                <span class="sr-only">${weather}</span>
                <p class="feed-weather__data">${temperature}°</p>
                <p class="feed-weather__area">${korean}</p>
            `;
            weatherStage.appendChild(feedWeatherWrap);

            console.log(`${korean} - 기온: ${temperature}°C, 날씨: ${weather}`);
        }
        );

        const feedWeather = document.querySelectorAll('.feed-weather');
        feedWeather.forEach(weather => {
            const feedWeatherIcon = weather.querySelector('.feed-weather__icon');
            const feedWeatherIconName = weather.querySelector('.sr-only');

            if (feedWeatherIconName.innerText === '맑음') {
                feedWeatherIcon.classList.add('sun');
            } else if(feedWeatherIconName.innerText.includes('흐림')) {
                feedWeatherIcon.classList.add('cloud');
            } else if(feedWeatherIconName.innerText.includes('구름')) {
                feedWeatherIcon.classList.add('cloud2');
            }
        }); 

        const swiper = new Swiper('.weather-swiper', {
            direction: 'vertical',
            loop: true,
            slidesPerView: 1,
            mousewheel: true,
            autoplay: {
                delay: 3000,
            },
            speed: 500
        });

        swiper.update();
    } catch (error) {
        console.error('날씨 데이터를 가져오는 데 실패했습니다:', error);
    }
});
