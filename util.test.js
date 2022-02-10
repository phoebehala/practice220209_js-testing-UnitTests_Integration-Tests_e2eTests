const {generateText, checkAndGenerate} = require('./util');

/* unit test */
test('should output name and age',()=>{

    // double checks to avoid false possitive 
    const text = generateText('Ali',20)
    expect(text).toBe('Ali (20 years old)')

    const text2 = generateText('Bob',30)
    expect(text2).toBe('Bob (30 years old)')
})


// test the opposite 
test('should output name and age',()=>{
    const text = generateText('',null)
    expect(text).toBe(' (null years old)')
})


/* integration test */
test('should generate a valid text output', ()=>{
    const text = checkAndGenerate('Ali',20)
    expect(text).toBe('Ali (20 years old)')
})