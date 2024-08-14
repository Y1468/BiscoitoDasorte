
import { Component } from 'react';
import { StyleSheet, Text, View,Image, TouchableOpacity } from 'react-native';

export default class App extends Component{

   constructor(props){
      super(props)
      this.state={
         
         textoFrase:'',
         img:require('./imagem/biscoito.png')

      }

      this.quebraBiscoito=this.quebraBiscoito.bind(this)

      this.frases=[
         'Siga os boms e aprenda com eles',
         'O bom senso vale mais do que o conhecimento',
         'O risco e a maior distancia entre as pessoas ',
         'Deixe de lado as preocupações e seja feliz',
         'Realize o óbvio,pense no inposivel e conquiste o inposivel'
      ]

   }


   quebraBiscoito(){
      //Gerando frases
      let numeroAleatorio=Math.floor(Math.random()*this.frases.length)

      this.setState({
         textoFrase: '"' +this.frases[numeroAleatorio]+ '"',
         img:require('./imagem/biscoitoAberto.png')
      })
   }


  render(){
     return(
       <View style={st.container}>
          <Image 
             source={this.state.img} 
             style={st.img}
          />

            <Text style={st.textoFrase}>
              {this.state.textoFrase}
            </Text>
          
             <TouchableOpacity style={st.btn} onPress={this.quebraBiscoito}>
                <View style={st.btnArea}>
                <Text style={st.btnTexto}>Quebrar biscoito</Text>
                </View>
             </TouchableOpacity>

       </View>
     );
  }
}

const st=StyleSheet.create({
   container:{
      flex:1,
      alignItems:'center',
      justifyContent:'center'
   },

   img:{
     width:250,
     height:250
   },

   textoFrase:{
      fontSize:20,
      color:'#dd7b22',
      margin:30,
      fontStyle:'italic',
      textAlign:'center'
   },

   btn:{
     width:230,
     height:50,
     borderWidth:2,
     borderColor:'#dd7b22',
     borderRadius:25
   },

   btnArea:{
      flex:1,
      flexDirection:'row',
      justifyContent:'center',
      alignItems:'center'
   },

   btnTexto:{
     fontSize:18,
     fontWeight:'bold',
     color:'#dd7b22'
   }

})
