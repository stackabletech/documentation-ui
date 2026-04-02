;(function () {
  'use strict'

  var feedbackFormOptionButtons = document.querySelector('.feedback-form-options').querySelectorAll('button')
  if (!feedbackFormOptionButtons) return

  feedbackFormOptionButtons.forEach((button) => {
    button.addEventListener('click', selectFeedbackFormOptionButton)
  })

  function selectFeedbackFormOptionButton (e) {
    e.stopPropagation() // trap event
    feedbackFormOptionButtons.forEach((button) => {
      if (button === this) {
        this.classList.add('selected')
      } else {
        button.classList.remove('selected')
      }
    })

    var feedbackFormText = document.querySelector('.feedback-form-text')
    if (!feedbackFormText) return

    feedbackFormText.classList.remove('hide')
  }

  var feedbackFormSubmitButton = document.querySelector('.feedback-form-submit-button')
  if (!feedbackFormSubmitButton) return

  var feedbackFormTextArea = document.querySelector('.feedback-form-text textarea')
  if (!feedbackFormTextArea) return

  feedbackFormSubmitButton.addEventListener('click', submitFeedback)

  function submitFeedback (e) {
    e.preventDefault()
    feedbackFormSubmitButton.classList.add('selected')

    var feedbackFormOptionButtonSelected = document.querySelector('.feedback-form-button.selected')
    if (!feedbackFormOptionButtonSelected) return

    const feedbackForm = document.querySelector('.feedback-section form')
    if (!feedbackForm) return
    const feedbackFormData = new FormData(feedbackForm)

    feedbackFormData.append('feedback-option', feedbackFormOptionButtonSelected.value)

    var action = feedbackForm.getAttribute('action') || '/'

    fetch(action, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams(feedbackFormData).toString(),
    })
      .then(() => console.log('Form successfully submitted.'))
      .catch((error) => console.error('ERROR: ', error))

    feedbackFormSubmitButton.innerText = 'Submitted'
    feedbackFormSubmitButton.disabled = true
    feedbackFormTextArea.disabled = true

    feedbackFormOptionButtons.forEach((button) => {
      button.disabled = true
    })

    var feedbackFormThankYou = document.querySelector('.feedback-form-thank-you')
    if (!feedbackFormThankYou) return

    feedbackFormThankYou.classList.remove('hide')
  }
})()
