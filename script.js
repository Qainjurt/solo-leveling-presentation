// Тілдердің аудармалары
const translations = {
    "kk": {
        "nav-title": "Solo Leveling",
        "nav-home": "Басты",
        "nav-plot": "Сюжет",
        "nav-characters": "Кейіпкерлер",
        "nav-rating": "Рейтинг",
        "nav-gallery": "Галерея",
        "nav-trailer": "Трейлер",
        "nav-reviews": "Пікірлер",
        "nav-news": "Жаңалықтар",
        "nav-about": "Тарих",
        "home-title": "Solo Leveling",
        "home-description": "Корей манхуасының негізінде түсірілген әлемді жаулаған аниме! Сун Джин Вудың жалғыз өзі деңгей көтерген эпикалық шытырман оқиғасына сүңгіңіз. Зындандар, монстрлар, шексіз күш және 3D визуалды шайқастар – мұның бәрі Solo Leveling әлемінде! A-1 Pictures студиясының керемет анимациясы мен Чугонның бірегей әлемі сізді таңғалдырады.",
        "plot-title": "Сюжет",
        "plot-paragraph1": "Бір күні әлемде жұмбақ қақпалар пайда болады, олар монстрларға толы зындандарға апарады. Аңшылар осы қақпаларды жауып, әлемді қорғауға тырысады. Сун Джин Ву, \"Әлемнің ең әлсіз аңшысы\" атанған жас жігіт, қарапайым өмір сүріп, отбасына қамқорлық жасайды. Бірақ қос зындандағы өлімге әкелетін оқиғадан кейін оған \"Жүйе\" атты сиқырлы күш беріледі, ол арқылы ол деңгейін көтеріп, күшейе алады.",
        "plot-paragraph2": "Сун Джин Вудың әр шайқасы – табандылық пен өзін-өзі жетілдірудің символы. Ол зындандардың құпиясын ашып, ең мықты аңшыға айнала ма? Solo Leveling – динамикалық шайқастар, күтпеген сюжеттік бұрылыстар және терең кейіпкер дамуы. A-1 Pictures студиясы манхуаның рухын сақтай отырып, әр кадрды 3D-эффектілермен жандандырды.",
        "characters-title": "Кейіпкерлер",
        "characters-description": "Solo Leveling әлеміндегі кейіпкерлер – оқиғаның жүрегі. Олардың әрқайсысы өзіндік мінезі, мақсаты және даму жолымен есте қалады. 3D рендерленген портреттер кейіпкерлердің шынайы эмоцияларын ашады.",
        "character-sung-title": "Сун Джин Ву",
        "character-sung-description": "Ең әлсіз аңшыдан ең күштіге дейінгі жол. Сун Джин Вудың табандылығы, ақылдылығы және \"Жүйе\" арқылы алған шексіз күші оны шыңға шығарады. Оның 3D портреті оның эпикалық шайқастарын бейнелейді.",
        "character-cha-title": "Ча Хэ Ин",
        "character-cha-description": "S-дәрежелі аңшы, қылыш шебері және сүйкімді кейіпкер. Ча Хэ Иннің күші мен нәзіктігі теңдессіз. Оның 3D бейнесі оның шайқастарын шынайы етеді.",
        "character-yoo-title": "Ю Джин Хо",
        "character-yoo-description": "Сун Джин Вудың адал досы және серігі. Ю Джин Хоның батылдығы мен әзілқойлығы оқиғаға ерекше реңк береді. Оның 3D портреті оның шынайы рухын ашады.",
        "rating-title": "Рейтинг",
        "rating-description": "Solo Leveling – жанкүйерлер мен сыншылардың жоғары бағалаған анимесі. Оның динамикалық шайқастары, терең кейіпкер дамуы және A-1 Pictures-тің 3D-анимациясы әлемдік деңгейде мойындалды. Төменде танымал платформалардағы рейтингтер және графикалық талдау:",
        "rating-mal": "<strong>MyAnimeList:</strong> 8.4/10 – 500,000+ дауыс, жанкүйерлердің сүйіктісі.",
        "rating-imdb": "<strong>IMDb:</strong> 8.7/10 – Жаһандық аудиторияның жоғары бағасы.",
        "rating-anilist": "<strong>AniList:</strong> 85% – Аниме әуесқойларының таңдауы.",
        "rating-summary": "2024 жылдың ең үздік анимелерінің бірі, Solo Leveling әр эпизодымен көрермендерді баурап алады. Төмендегі диаграмма рейтингтердің салыстырмалы талдауын көрсетеді:",
        "gallery-title": "Галерея",
        "gallery-description": "Анимеден алынған 3D рендерленген кадрлар мен эпикалық сәттер. Зындандардағы шайқастар, кейіпкерлердің эмоциялары және A-1 Pictures-тің керемет анимациясы осы галереяда! Суреттерді басу арқылы толық өлшемде көріңіз.",
        "trailer-title": "Трейлер",
        "trailer-description": "Solo Leveling анимесінің ресми трейлері – зындандардың құпиясы мен 3D шайқастардың динамикасын сезініңіз! A-1 Pictures-тің керемет анимациясы мен әсерлі саундтрегі сізді осы әлемге батырады.",
        "trailer-note": "*YouTube видеосы деректерді жинауы мүмкін. Толығырақ <a href=\"https://www.youtube.com/t/terms\" target=\"_blank\">YouTube құпиялылық саясатынан</a> көріңіз.",
        "reviews-title": "Пікірлер",
        "reviews-description": "Жанкүйерлер мен сыншылардың Solo Leveling және оның 3D визуалдары туралы пікірлері. Олардың әсерлері слайдерде!",
        "review-1": "\"3D шайқастар мен керемет анимация! Solo Leveling – аниме әлеміндегі шедевр. Сун Джин Вудың әр қадамы таңғалдырады!\"",
        "review-1-author": "- AnimeFan123",
        "review-2": "\"Сюжеттің тереңдігі мен 3D кейіпкерлер теңдессіз. 2024 жылдың ең үздік анимесі!\"",
        "review-2-author": "- CriticX",
        "review-3": "\"Манга фандары үшін сыйлық! 3D кадрлар әр эпизодты өнер туындысына айналдырады.\"",
        "review-3-author": "- MangaLover",
        "review-4": "\"Саундтрек, 3D анимация және сюжет – бәрі мінсіз! Екінші маусымды асыға күтеміз.\"",
        "review-4-author": "- EpicAnimeFan",
        "carousel-prev": "Алдыңғы",
        "carousel-next": "Келесі",
        "news-title": "Жаңалықтар",
        "news-description": "Solo Leveling әлеміндегі соңғы жаңалықтар мен хабарландырулар. Екінші маусым, мерчандайз және басқа да қызықты оқиғалар туралы біліңіз!",
        "news-1-title": "Екінші маусым 2025 жылы шығады!",
        "news-1-date": "04 мамыр 2025",
        "news-1-description": "A-1 Pictures екінші маусымның 2025 жылдың қаңтар айында шығатынын хабарлады. Сун Джин Вудың жаңа шытырман оқиғалары күтілуде!",
        "news-2-title": "Жаңа мерчандайз желісі",
        "news-2-date": "15 сәуір 2025",
        "news-2-description": "Solo Leveling жанкүйерлеріне арналған жаңа мерчандайз желісі шықты: Сун Джин Ву мен Ча Хэ Иннің фигуралары!",
        "news-3-title": "Crunchyroll-да стриминг",
        "news-3-date": "01 мамыр 2025",
        "news-3-description": "Solo Leveling бірінші маусымы Crunchyroll-да қайтадан қолжетімді, субтитрлермен және дубляжда!",
        "about-title": "Solo Leveling Тарихы",
        "about-paragraph1": "Solo Leveling – Чугон жазған және D&C Media баспасы шығарған оңтүстік корей манхуасы. 2016 жылы вебтун ретінде KakaoPage платформасында жарияланды және 100 миллионнан астам оқылым жинады. Манхуаның бірегей әлемі, динамикалық шайқастары және Сун Джин Вудың дамуы оны әлемдік хитке айналдырды.",
        "about-paragraph2": "2024 жылы A-1 Pictures студиясы манхуаны анимеге бейімдеп, Crunchyroll және Netflix платформаларында шығарды. 12 эпизодтан тұратын бірінші маусым шайқастар, драмалық сәттер және 3D анимацияға толы. Саундтрек пен визуалды эффектілер әлемдік деңгейде жоғары бағаланды.",
        "about-facts-title": "<strong>Қызықты фактілер:</strong>",
        "about-fact1": "Сун Джин Вудың прототипі автордың табандылық пен өзін-өзі дамыту идеясынан алынған.",
        "about-fact2": "Манхуаның 3D рендерленген мұқабалары жанкүйерлер арасында үлкен танымалдылыққа ие.",
        "about-fact3": "Аниманың екінші маусымы 2025 жылы шығуы мүмкін деген болжам бар.",
        "footer-copyright": "© 2025 Solo Leveling Презентация | Барлық құқықтар қорғалған",
        "footer-official-site": "Ресми сайт"
    },
    "ru": {
        "nav-title": "Solo Leveling",
        "nav-home": "Главная",
        "nav-plot": "Сюжет",
        "nav-characters": "Персонажи",
        "nav-rating": "Рейтинг",
        "nav-gallery": "Галерея",
        "nav-trailer": "Трейлер",
        "nav-reviews": "Отзывы",
        "nav-news": "Новости",
        "nav-about": "История",
        "home-title": "Solo Leveling",
        "home-description": "Аниме, покорившее мир, основанное на корейской манхве! Погрузитесь в эпическое приключение Сон Джин Ву, который в одиночку повышает свой уровень. Подземелья, монстры, бесконечная сила и 3D-визуальные сражения – все это в мире Solo Leveling! Великолепная анимация от студии A-1 Pictures и уникальный мир Чугона поразят вас.",
        "plot-title": "Сюжет",
        "plot-paragraph1": "Однажды в мире появляются загадочные врата, ведущие в подземелья, полные монстров. Охотники пытаются закрывать эти врата, защищая мир. Сон Джин Ву, известный как \"Самый слабый охотник в мире\", ведет скромную жизнь, заботясь о своей семье. Но после смертельного инцидента в двойном подземелье ему даруется магическая сила под названием \"Система\", с помощью которой он может повышать свой уровень и становиться сильнее.",
        "plot-paragraph2": "Каждая битва Сон Джин Ву – символ упорства и самосовершенствования. Сможет ли он раскрыть тайны подземелий и стать самым сильным охотником? Solo Leveling – это динамичные сражения, неожиданные повороты сюжета и глубокое развитие персонажей. Студия A-1 Pictures сохранила дух манхвы, оживив каждый кадр с помощью 3D-эффектов.",
        "characters-title": "Персонажи",
        "characters-description": "Персонажи мира Solo Leveling – сердце истории. Каждый из них запоминается своим характером, целями и развитием. 3D-рендеренные портреты раскрывают их настоящие эмоции.",
        "character-sung-title": "Сон Джин Ву",
        "character-sung-description": "Путь от самого слабого охотника до самого сильного. Упорство, интеллект и бесконечная сила, полученная через \"Систему\", возносят Сон Джин Ву на вершину. Его 3D-портрет отражает его эпические сражения.",
        "character-cha-title": "Ча Хэ Ин",
        "character-cha-description": "Охотник S-ранга, мастер меча и очаровательный персонаж. Сила и утонченность Ча Хэ Ин не имеют равных. Ее 3D-образ делает ее сражения реалистичными.",
        "character-yoo-title": "Ю Джин Хо",
        "character-yoo-description": "Верный друг и соратник Сон Джин Ву. Смелость и чувство юмора Ю Джин Хо добавляют истории особый колорит. Его 3D-портрет раскрывает его истинный дух.",
        "rating-title": "Рейтинг",
        "rating-description": "Solo Leveling – аниме, высоко оцененное фанатами и критиками. Его динамичные сражения, глубокое развитие персонажей и 3D-анимация от A-1 Pictures признаны на мировом уровне. Ниже представлены рейтинги на популярных платформах и графический анализ:",
        "rating-mal": "<strong>MyAnimeList:</strong> 8.4/10 – более 500,000 голосов, любимец фанатов.",
        "rating-imdb": "<strong>IMDb:</strong> 8.7/10 – Высокая оценка мировой аудитории.",
        "rating-anilist": "<strong>AniList:</strong> 85% – Выбор любителей аниме.",
        "rating-summary": "Одно из лучших аниме 2024 года, Solo Leveling захватывает зрителей с каждым эпизодом. Диаграмма ниже показывает сравнительный анализ рейтингов:",
        "gallery-title": "Галерея",
        "gallery-description": "3D-рендеренные кадры и эпические моменты из аниме. Сражения в подземельях, эмоции персонажей и великолепная анимация от A-1 Pictures – в этой галерее! Нажмите на изображения, чтобы увидеть их в полном размере.",
        "trailer-title": "Трейлер",
        "trailer-description": "Официальный трейлер аниме Solo Leveling – почувствуйте тайну подземелий и динамику 3D-сражений! Великолепная анимация от A-1 Pictures и впечатляющий саундтрек погрузят вас в этот мир.",
        "trailer-note": "*Видео на YouTube может собирать данные. Подробнее в <a href=\"https://www.youtube.com/t/terms\" target=\"_blank\">политике конфиденциальности YouTube</a>.",
        "reviews-title": "Отзывы",
        "reviews-description": "Отзывы фанатов и критиков о Solo Leveling и его 3D-визуале. Их впечатления – в слайдере!",
        "review-1": "\"3D-сражения и потрясающая анимация! Solo Leveling – шедевр в мире аниме. Каждый шаг Сон Джин Ву восхищает!\"",
        "review-1-author": "- AnimeFan123",
        "review-2": "\"Глубина сюжета и 3D-персонажи бесподобны. Лучшее аниме 2024 года!\"",
        "review-2-author": "- CriticX",
        "review-3": "\"Подарок для фанатов манги! 3D-кадры превращают каждый эпизод в произведение искусства.\"",
        "review-3-author": "- MangaLover",
        "review-4": "\"Саундтрек, 3D-анимация и сюжет – все идеально! С нетерпением ждем второй сезон.\"",
        "review-4-author": "- EpicAnimeFan",
        "carousel-prev": "Предыдущий",
        "carousel-next": "Следующий",
        "news-title": "Новости",
        "news-description": "Последние новости и анонсы из мира Solo Leveling. Узнайте о втором сезоне, мерчендайзе и других интересных событиях!",
        "news-1-title": "Второй сезон выйдет в 2025 году!",
        "news-1-date": "04 мая 2025",
        "news-1-description": "A-1 Pictures объявила, что второй сезон выйдет в январе 2025 года. Ожидаются новые приключения Сон Джин Ву!",
        "news-2-title": "Новая линейка мерчендайза",
        "news-2-date": "15 апреля 2025",
        "news-2-description": "Вышла новая линейка мерчендайза для фанатов Solo Leveling: фигурки Сон Джин Ву и Ча Хэ Ин!",
        "news-3-title": "Стриминг на Crunchyroll",
        "news-3-date": "01 мая 2025",
        "news-3-description": "Первый сезон Solo Leveling снова доступен на Crunchyroll с субтитрами и дубляжом!",
        "about-title": "История Solo Leveling",
        "about-paragraph1": "Solo Leveling – южнокорейская манхва, написанная Чугоном и опубликованная издательством D&C Media. В 2016 году она была опубликована как вебтун на платформе KakaoPage и собрала более 100 миллионов просмотров. Уникальный мир манхвы, динамичные сражения и развитие Сон Джин Ву сделали ее мировым хитом.",
        "about-paragraph2": "В 2024 году студия A-1 Pictures адаптировала манхву в аниме, которое было выпущено на платформах Crunchyroll и Netflix. Первый сезон из 12 эпизодов полон сражений, драматических моментов и 3D-анимации. Саундтрек и визуальные эффекты получили высокую оценку на мировом уровне.",
        "about-facts-title": "<strong>Интересные факты:</strong>",
        "about-fact1": "Прототип Сон Джин Ву был вдохновлен идеей автора о настойчивости и самосовершенствовании.",
        "about-fact2": "3D-рендеренные обложки манхвы пользуются огромной популярностью среди фанатов.",
        "about-fact3": "Есть предположения, что второй сезон аниме выйдет в 2025 году.",
        "footer-copyright": "© 2025 Презентация Solo Leveling | Все права защищены",
        "footer-official-site": "Официальный сайт"
    },
    "en": {
        "nav-title": "Solo Leveling",
        "nav-home": "Home",
        "nav-plot": "Plot",
        "nav-characters": "Characters",
        "nav-rating": "Rating",
        "nav-gallery": "Gallery",
        "nav-trailer": "Trailer",
        "nav-reviews": "Reviews",
        "nav-news": "News",
        "nav-about": "History",
        "home-title": "Solo Leveling",
        "home-description": "An anime that conquered the world, based on a Korean manhwa! Dive into the epic adventure of Sung Jin-Woo, who levels up alone. Dungeons, monsters, infinite power, and 3D visual battles – all in the world of Solo Leveling! A-1 Pictures’ stunning animation and Chugong’s unique world will amaze you.",
        "plot-title": "Plot",
        "plot-paragraph1": "One day, mysterious gates appear in the world, leading to dungeons filled with monsters. Hunters try to close these gates to protect the world. Sung Jin-Woo, known as the \"Weakest Hunter in the World,\" lives a humble life, caring for his family. But after a deadly incident in a double dungeon, he is granted a magical power called the \"System,\" which allows him to level up and grow stronger.",
        "plot-paragraph2": "Each of Sung Jin-Woo’s battles is a symbol of perseverance and self-improvement. Will he uncover the secrets of the dungeons and become the strongest hunter? Solo Leveling is full of dynamic battles, unexpected plot twists, and deep character development. A-1 Pictures preserved the spirit of the manhwa, bringing each frame to life with 3D effects.",
        "characters-title": "Characters",
        "characters-description": "The characters of the Solo Leveling world are the heart of the story. Each one is memorable with their unique personality, goals, and development. 3D-rendered portraits reveal their true emotions.",
        "character-sung-title": "Sung Jin-Woo",
        "character-sung-description": "From the weakest hunter to the strongest. Sung Jin-Woo’s perseverance, intelligence, and infinite power gained through the \"System\" take him to the top. His 3D portrait reflects his epic battles.",
        "character-cha-title": "Cha Hae-In",
        "character-cha-description": "An S-rank hunter, swordmaster, and charming character. Cha Hae-In’s strength and grace are unmatched. Her 3D image brings her battles to life.",
        "character-yoo-title": "Yoo Jin-Ho",
        "character-yoo-description": "Sung Jin-Woo’s loyal friend and companion. Yoo Jin-Ho’s bravery and humor add a special touch to the story. His 3D portrait reveals his true spirit.",
        "rating-title": "Rating",
        "rating-description": "Solo Leveling is highly rated by fans and critics alike. Its dynamic battles, deep character development, and A-1 Pictures’ 3D animation have been recognized on a global level. Below are the ratings on popular platforms and a graphical analysis:",
        "rating-mal": "<strong>MyAnimeList:</strong> 8.4/10 – Over 500,000 votes, a fan favorite.",
        "rating-imdb": "<strong>IMDb:</strong> 8.7/10 – High rating from a global audience.",
        "rating-anilist": "<strong>AniList:</strong> 85% – A top choice for anime lovers.",
        "rating-summary": "One of the best anime of 2024, Solo Leveling captivates viewers with every episode. The chart below shows a comparative analysis of the ratings:",
        "gallery-title": "Gallery",
        "gallery-description": "3D-rendered frames and epic moments from the anime. Battles in dungeons, characters’ emotions, and A-1 Pictures’ stunning animation are in this gallery! Click on the images to view them in full size.",
        "trailer-title": "Trailer",
        "trailer-description": "The official trailer of Solo Leveling – feel the mystery of the dungeons and the dynamic of 3D battles! A-1 Pictures’ stunning animation and impressive soundtrack will immerse you in this world.",
        "trailer-note": "*YouTube videos may collect data. Learn more in <a href=\"https://www.youtube.com/t/terms\" target=\"_blank\">YouTube’s privacy policy</a>.",
        "reviews-title": "Reviews",
        "reviews-description": "Reviews from fans and critics about Solo Leveling and its 3D visuals. Their impressions are in the slider!",
        "review-1": "\"3D battles and stunning animation! Solo Leveling is a masterpiece in the anime world. Every step of Sung Jin-Woo is breathtaking!\"",
        "review-1-author": "- AnimeFan123",
        "review-2": "\"The depth of the plot and 3D characters are unparalleled. The best anime of 2024!\"",
        "review-2-author": "- CriticX",
        "review-3": "\"A gift for manga fans! 3D frames turn every episode into a work of art.\"",
        "review-3-author": "- MangaLover",
        "review-4": "\"The soundtrack, 3D animation, and plot – everything is perfect! Can’t wait for the second season.\"",
        "review-4-author": "- EpicAnimeFan",
        "carousel-prev": "Previous",
        "carousel-next": "Next",
        "news-title": "News",
        "news-description": "The latest news and announcements from the Solo Leveling world. Learn about the second season, merchandise, and other exciting events!",
        "news-1-title": "Second Season to Release in 2025!",
        "news-1-date": "May 04, 2025",
        "news-1-description": "A-1 Pictures announced that the second season will be released in January 2025. New adventures of Sung Jin-Woo are coming!",
        "news-2-title": "New Merchandise Line",
        "news-2-date": "April 15, 2025",
        "news-2-description": "A new merchandise line for Solo Leveling fans has been released: Sung Jin-Woo and Cha Hae-In figures!",
        "news-3-title": "Streaming on Crunchyroll",
        "news-3-date": "May 01, 2025",
        "news-3-description": "The first season of Solo Leveling is available again on Crunchyroll, with subtitles and dubbing!",
        "about-title": "History of Solo Leveling",
        "about-paragraph1": "Solo Leveling is a South Korean manhwa written by Chugong and published by D&C Media. It was published as a webtoon on the KakaoPage platform in 2016 and has garnered over 100 million views. The manhwa’s unique world, dynamic battles, and Sung Jin-Woo’s development made it a global hit.",
        "about-paragraph2": "In 2024, A-1 Pictures adapted the manhwa into an anime, which was released on Crunchyroll and Netflix. The first season, consisting of 12 episodes, is filled with battles, dramatic moments, and 3D animation. The soundtrack and visual effects have been highly praised on a global level.",
        "about-facts-title": "<strong>Interesting Facts:</strong>",
        "about-fact1": "Sung Jin-Woo’s prototype was inspired by the author’s idea of perseverance and self-improvement.",
        "about-fact2": "The manhwa’s 3D-rendered covers are hugely popular among fans.",
        "about-fact3": "There are speculations that the second season of the anime will be released in 2025.",
        "footer-copyright": "© 2025 Solo Leveling Presentation | All Rights Reserved",
        "footer-official-site": "Official Site"
    }
};

// Тілді ауыстыру функциясы
function changeLanguage(lang) {
    document.querySelectorAll("[data-i18n]").forEach(element => {
        const key = element.getAttribute("data-i18n");
        element.innerHTML = translations[lang][key];
    });
    document.documentElement.lang = lang;
    localStorage.setItem("language", lang);
}

// Сайт жүктелгенде тілді орнату
document.addEventListener("DOMContentLoaded", () => {
    const savedLang = localStorage.getItem("language") || "kk";
    changeLanguage(savedLang);
});

// Тегіс скролл
document.querySelectorAll('.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const section = document.querySelector(this.getAttribute('href'));
        section.scrollIntoView({ behavior: 'smooth' });
    });
});

// Рейтинг диаграммасы (Chart.js)
const ctx = document.getElementById('ratingChart').getContext('2d');
const ratingChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['MyAnimeList', 'IMDb', 'AniList'],
        datasets: [{
            label: 'Рейтинг',
            data: [8.4, 8.7, 8.5],
            backgroundColor: ['#ff4d4d', '#1e90ff', '#ffcc00'],
            borderColor: ['#fff'],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
                title: {
                    display: true,
                    text: 'Рейтинг (10/10)',
                    color: '#fff'
                },
                ticks: { color: '#fff' }
            },
            x: {
                ticks: { color: '#fff' }
            }
        },
        plugins: {
            legend: { labels: { color: '#fff' } }
        }
    }
});

// Parallax эффектісі
document.addEventListener('mousemove', (e) => {
    const parallaxImages = document.querySelectorAll('.parallax-container img');
    parallaxImages.forEach(img => {
        const rect = img.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) / 50;
        const y = (e.clientY - rect.top - rect.height / 2) / 50;
        img.style.transform = `rotateX(${y}deg) rotateY(${x}deg) scale(1.1)`;
    });
});

// Галерея суреттерін басқанда масштабтау
document.querySelectorAll('.gallery-img').forEach(img => {
    img.addEventListener('click', () => {
        img.classList.toggle('enlarged');
    });
});