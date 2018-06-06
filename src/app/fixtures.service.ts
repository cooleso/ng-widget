// require.context('../assets/images', true, /\.jpg/);

const IMAGES_TOTAL = 5;

const rnd = (n) => Math.floor(Math.random() * n);
const fillArray = (n) => Array.apply(null, Array(n)).map(() => `test${rnd(IMAGES_TOTAL)}.jpg`);
const getRandomValue = (values: any[]) => values[rnd(values.length)];

const titles = [
    'Интересные каналы про Dota 2',
    'Девушки-стримерши',
    'Все, что связяно с Fortune'
];

const creators = [
    'TestGuy',
    'Вы',
    'MTSGuy',
    'TheEyeGuy'
];

export interface IFixture {
    images: string[];
    title: string;
    creator: string;
    watchers: {
        images: string[];
        total: number;
    };
    inFavorites: boolean;
}

const getFixture = () => ({
    images: fillArray(3),
    title: getRandomValue(titles),
    creator: getRandomValue(creators),
    watchers: {
        images: fillArray(4),
        total: rnd(2000),
    },
    inFavorites: !!rnd(1)
});

export class FixturesService {
    generateFixture(): IFixture {
        return getFixture();
    }
}
