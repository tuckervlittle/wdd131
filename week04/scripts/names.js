let names = ['Nancy','Blessing','Jorge','Svetlana','Bob'];

let namesb = names.filter(name => name.charAt(0) === 'B');

function welcome(cName, sName) {
    return `Welcome to the ${cName} ${sName}!`
};