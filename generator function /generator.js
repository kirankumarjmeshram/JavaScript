// 1. Basic Generator Function
function* generatorFunction() {
    yield 1; // Pause and yield the value 1
    yield 2; // Pause and yield the value 2
    yield 3; // Pause and yield the value 3
}

const gen = generatorFunction();
console.log('Basic Generator Function:');
console.log(gen.next().value); // 1
console.log(gen.next().value); // 2
console.log(gen.next().value); // 3
console.log(gen.next().done);  // true

console.log('---');

// 2. Control Flow in Generators
function* controlFlow() {
    yield 1; // Yield 1, pausing execution
    return "Done!"; // Return a final value and end the generator
}

const controlGen = controlFlow();
console.log('Control Flow in Generators:');
console.log(controlGen.next()); // { value: 1, done: false }
console.log(controlGen.next()); // { value: "Done!", done: true }

console.log('---');

// 3. Error Handling in Generators
function* errorHandling() {
    try {
        yield 1; // Yield 1, pausing execution
        throw new Error("Something went wrong"); // Throw an error
    } catch (e) {
        yield `Caught an error: ${e.message}`; // Catch the error and yield a message
    }
}

const errorGen = errorHandling();
console.log('Error Handling in Generators:');
console.log(errorGen.next()); // { value: 1, done: false }
console.log(errorGen.throw(new Error("Test error"))); // { value: "Caught an error: Test error", done: false }

console.log('---');

// 4. Composing Generators
function* innerGen() {
    yield "inner 1"; // Yield "inner 1"
    yield "inner 2"; // Yield "inner 2"
}

function* outerGen() {
    yield "outer 1"; // Yield "outer 1"
    yield* innerGen(); // Yield all values from innerGen
    yield "outer 2"; // Yield "outer 2"
}

const composedGen = outerGen();
console.log('Composing Generators:');
console.log([...composedGen]); // ["outer 1", "inner 1", "inner 2", "outer 2"]

console.log('---');

// 5. Asynchronous Generators
async function* asyncGenerator() {
    for (let i = 0; i < 3; i++) {
        // Simulate an asynchronous operation
        await new Promise(resolve => setTimeout(resolve, 1000));
        yield i; // Yield the current value after delay
    }
}

(async () => {
    console.log('Asynchronous Generators:');
    for await (let num of asyncGenerator()) {
        console.log(num); // Logs 0, 1, 2 with 1 second delay between each
    }
})();

console.log('---');

// 6. Handling Asynchronous Operations in Redux-Saga Style
function* fetchData() {
    try {
        // Call an API (simulated with a dummy function here)
        const response = yield call(api.fetchData);
        // Dispatch success action with fetched data
        yield put({ type: "DATA_SUCCESS", data: response });
    } catch (error) {
        // Dispatch failure action with error
        yield put({ type: "DATA_FAILURE", error });
    }
}

// Dummy API call function for demonstration
function api() {
    return {
        fetchData: () => new Promise(resolve => setTimeout(() => resolve("Data"), 1000))
    };
}

// Dummy redux-saga call and put effects for demonstration
function call(fn) {
    return fn();
}

function put(action) {
    console.log('Dispatched action:', action);
}

console.log('Handling Asynchronous Operations in Redux-Saga Style:');
fetchData().next(); // Simulate calling fetchData
