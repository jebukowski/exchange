import * as exchangesSaga from './exchanges';

const mapImportsToArray = (imports) => Object.keys(imports).map(key => imports[key]());

export default function*() {
  yield [
    ...mapImportsToArray(exchangesSaga),
  ];
}
