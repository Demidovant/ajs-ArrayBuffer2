import ArrayBufferConverter from '../ArrayBuffer';

const data1 = '{"data":{"user":{"id":1,"name":"Hitman","level":10}}}';
const data2 = '{"test":{"users":[1, "value", 1,5]}}';

function getBuffer(data) {
  return ((input) => {
    const buffer = new ArrayBuffer(data.length * 2);
    const bufferView = new Uint16Array(buffer);
    for (let i = 0; i < input.length; i += 1) {
      bufferView[i] = input.charCodeAt(i);
    }
    return buffer;
  })(data);
}

test('Проверка создания класса ArrayBufferConverter, выполнения toString() и load(buffer) без ошибок', () => {
  expect(() => {
    const buffer = getBuffer(data1);
    const arrbuf = new ArrayBufferConverter();
    arrbuf.load(buffer);
    arrbuf.toString();
  }).not.toThrow();
});

test('Проверка результата toString(), data1', () => {
  const buffer = getBuffer(data1);
  const arrbuf = new ArrayBufferConverter();
  arrbuf.load(buffer);
  const data = arrbuf.toString();
  expect(data).toBe('{"data":{"user":{"id":1,"name":"Hitman","level":10}}}');
});

test('Проверка результата toString(), data2', () => {
  const buffer = getBuffer(data2);
  const arrbuf = new ArrayBufferConverter();
  arrbuf.load(buffer);
  const data = arrbuf.toString();
  expect(data).toBe('{"test":{"users":[1, "value", 1,5]}}');
});
