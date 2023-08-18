import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { useState } from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';

function App() {
  const emoji = '\u{1F44D}'
  const [img, setImg]= useState(require('./src/Biblia_fechada-removebg-preview.png'));
  const [textoFrase, setTextoFrase] = useState('')
  let frases = ['O Senhor é a minha luz e a minha salvação; de quem terei medo? O Senhor é a fortaleza da minha vida; a quem temerei?','Em Deus louvarei a sua palavra, em Deus pus a minha confiança; não temerei o que me possa fazer a carne. Todos os dias torcem as minhas palavras; todos os seus pensamentos são contra mim para o mal.','Os céus proclamam a glória de Deus, e o firmamento anuncia as obras das suas mãos.','Quem é o que vence o mundo, senão aquele que crê ser Jesus o Filho de Deus?','Espere no Senhor. Seja forte! Coragem! Espere no Senhor.',
'Onde há trabalho há riqueza, e onde há cooperação há paz.','Se prego o evangelho não tenho de que me gloriar, pois sobre mim pesa essa responsabilidade.','Põe-me como selo sobre o teu coração, como selo sobre o teu braço, porque o amor é forte como a morte.','Bem-aventurado o homem que põe no Senhor a sua confiança.','Vire Vasco agora porque depois vão te chamar de modinha '+ `${emoji}`,'Ainda que a minha mente e o meu corpo enfraqueçam, Deus é a minha força, Ele é tudo o que eu sempre preciso.','Não fui eu que lhe ordenei? Seja forte e corajoso! Não se apavore, nem se desanime, pois o Senhor, o seu Deus, estará com você por onde você andar.','Porque quando estou fraco então sou forte.','Nós, que somos fortes, devemos suportar as fraquezas dos fracos, e não agradar a nós mesmos. Suportar, não meramente tolerar ou “aguentar”, mas sustentar com amor.']




  function abrirBiblia(){
    let numeroAleatorio = Math.floor(Math.random()* frases.length)
    setTextoFrase('"' + frases[numeroAleatorio] + '"')
    setImg(require('./src/Biblia_boa_aberta-removebg-preview.png'))
  }


  function fecharBiblia(){
    setImg(require('./src/Biblia_fechada-removebg-preview.png'))
    setTextoFrase('')
  }




  return (
    <View style={styles.container}>

      <Image source={img} style={styles.img}/>

      <Text style={styles.textofrase}>{textoFrase}</Text>
      <TouchableOpacity style={styles.botao} onPress={ abrirBiblia }>
        <View style={styles.btnArea}>
          <Text style={styles.btnTexto}>Abrir a Biblia</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.botao, { marginTop:15, borderColor: '#121212',}]} onPress={ fecharBiblia }>
        <View style={styles.btnArea}>
          <Text style={[styles.btnTexto, {color: '#121212'}]}>Fechar a Biblia</Text>
        </View>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  img:{
    width:230,
    height:230,
  },
  textofrase:{
    fontSize: 25,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height:50,
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 25
  },
  btnArea:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  btnTexto:{
    fontSize: 17,
    fontWeight: 'bold',
    color: 'blue',
  }
})

export default App;
