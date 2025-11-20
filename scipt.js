async function voiceToText() {
    const response = await fetch('https://api.lemonfox.ai/v1/audio/transcriptions', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${fWT4PtxUnZ8bFEFVbV8ASK5EwwwCyAow}`
  },
  body: body
})
}