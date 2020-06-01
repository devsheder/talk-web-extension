const introSlidesDir = '00-intro';
const introSlides = () => [`${introSlidesDir}/00-TITLE.md`, `${introSlidesDir}/01-intro.md`];

const archiSlidesDir = '01-archi';
const archiSlides = () => [`${archiSlidesDir}/00-archi.md`];

const demosSlidesDir = '02-demos';
const demosSlides = () => [
  `${demosSlidesDir}/00-borderify.md`,
  `${demosSlidesDir}/01-weather.md`,
  `${demosSlidesDir}/02-ui.md`,
  `${demosSlidesDir}/03-native_messaging.md`,
];

const rexUsecasesSlidesDir = '03-rex-usecases';
const rexUsecasesSlides = () => [`${rexUsecasesSlidesDir}/rex-usecases.md`];

const endSlides = () => [`04-end/end.md`];

function formation() {
  return [...introSlides(), ...archiSlides(), ...demosSlides(), ...rexUsecasesSlides(), ...endSlides()].map(
    (slidePath) => {
      return { path: slidePath };
    }
  );
}

export function usedSlides() {
  return formation();
}
