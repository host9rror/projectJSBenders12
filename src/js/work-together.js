import { formToJSON } from 'axios';
import post from './api';

const refs = {
  footerInput: document.querySelector('.footer-input-email'),
  footerComment: document.querySelector('.footer-input-comment'),
  footerForm: document.querySelector('.footer-form'),
  footerResponceHeader: document.querySelector('.footer-modal-header'),
  footerResponceParagr: document.querySelector('.footer-modal-p'),
  footerBtnClose: document.querySelector('.footer-close-btn'),
  footerBackdrop: document.querySelector('.backdrop'),
};

const {
  footerInput,
  footerComment,
  footerForm,
  footerResponceHeader,
  footerResponceParagr,
  footerBtnClose,
  footerBackdrop,
} = refs;

footerForm.addEventListener('submit', e => {
  e.preventDefault();
  renderBackdrop(
    e.target.elements.email.value,
    e.target.elements.comment.value
  );
  footerBtnClose.addEventListener('click', toggleBackdrop);
});

async function renderBackdrop(email, comment) {
  const input = email.trim();
  const message = comment.trim();
  try {
    const resp = await post({ input, message });
    addHTML(resp);
    toggleBackdrop();
    footerForm.reset();
  } catch (error) {
    alert('Заповніть форму коректно');
    console.log(error);
  }
}

function addHTML({ title, message }) {
  footerResponceHeader.textContent = `${title}`;
  footerResponceParagr.textContent = `${message}`;
}

function toggleBackdrop() {
  footerBackdrop.classList.toggle('backdrop-hidden');
}
