function verificarIdade() {
    const name = document.getElementById('name').value;
    const day = parseInt(document.getElementById('day').value);
    const month = parseInt(document.getElementById('month').value);
    const year = parseInt(document.getElementById('year').value);
  
    const dataNascimento = new Date(year, month - 1, day);
    const dataAtual = new Date();
    const idade = dataAtual.getFullYear() - dataNascimento.getFullYear();
  
    if (dataAtual.getMonth() < dataNascimento.getMonth() ||
        (dataAtual.getMonth() === dataNascimento.getMonth() && dataAtual.getDate() < dataNascimento.getDate())) {
      idade--;
    }
  
    let resultado = `${name}, você tem ${idade} anos.`;
  
    if (idade >= 18) {
      resultado += " Você é maior de idade.";
    } else {
      resultado += " Você é menor de idade.";
    }
  
    document.getElementById('resultado').innerText = resultado;
  }
  
  function resetForm() {
    document.getElementById('name').value = '';
    document.getElementById('day').value = '';
    document.getElementById('month').value = '';
    document.getElementById('year').value = '';
    document.getElementById('resultado').innerText = '';
  }
  