import { MdEmail } from 'react-icons/md';

const MailComponent = () => {
  const recipientEmail = 'arpitweb3@proton.me';
  const subject = encodeURIComponent('Hii Like your work, would love to talk to you about some ideas or business opportunity.');
  const body = encodeURIComponent('Hi Arpit, I like your work. Please respond to this email; we want to contact you about future opportunities for Blockchain development related work. Here is my LinkedIn, WhatsApp, and Twitter. Would love to get a response as soon as possible.');

  const gmailComposeLink = `mailto:${recipientEmail}?subject=${subject}&body=${body}`;

  return (
    <div>
      <a href={gmailComposeLink}>
        <MdEmail className='text-4xl text-white cursor-pointer' />
      </a>
    </div>
  );
};

export default MailComponent;
