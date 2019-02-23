import React from 'react'
import { View, Text } from 'react-native'
import { TextInputMask } from 'react-native-masked-text'

import { textInputStype, container } from './styles'

export default class MyScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      value: ''
    }
  }

  render() {
    return (
      <View style={container}>
        <Text>Only Numbers</Text>
        <TextInputMask
          type={'only-numbers'}
          value={this.state.value}
          onChangeText={text => {
            this.setState({
              value: text
            })
          }}
          style={textInputStype}
        />
      </View>
    )
  }
}