import React from 'react'

export default class extends React.Component {

  static async botonicInit({ req }) {
    req.context.echoText = req.props.context.user.provider_id //returns id
    // req.props.context.user.username returns username
    // req.props.context.user.providerreturns provider
  }

  render() {
    return (
        <message type="text">
            Hi {this.props.context.user.name}, I’m getting ready — can you describe what you’d like help with?
            By using this platform, you're consenting to participate in this research study - http://bit.ly/2jQIXQK.
        </message>
    )
  }
}