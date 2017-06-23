import * as ratesSaga from './rates';

const mapImportsToArray = (imports) => Object.keys(imports).map(key => imports[key]());

export default function*() {
  yield [
    ...mapImportsToArray(ratesSaga),
  ];
}
