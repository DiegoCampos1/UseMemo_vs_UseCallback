const var1 = 10;
const var2 = '10';

const func1 = () => {
  return 'reactDaily';
};

const func2 = () => {
  return 'reactDaily';
};

const func3 = func1;

console.log('Igualdade abstrata entre variaveis :', var1 == var2);
console.log('Igualdade rigorosa entre variaveis :', var1 === var2);
console.log('Igualdade entre funções que rertornam mesmo valor :', func1 == func2);
console.log('Igualdade :', func1 == func2);

// Função no JS são objetos, e para serem equivalencia se tiverem a mesma referencia:
console.log('Igualdade entre funções que apontam uma para outra :', func3 === func1);
