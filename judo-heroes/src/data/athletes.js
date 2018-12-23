"use strict";

const athletes = [
  {
    'id': 'password',
    'name': 'Password',
    'country': 'cu',
    'description': 'Set a screenlock password, PIN, or other authentication method (such as fingerprint or face unlock). The NCSC blog has some good advice on passwords. If you’re mostly using fingerprint or face unlock, you’ll be entering a password less often, so consider setting up a long password that’s difficult to guess.',
    'image': 'driulis-gonzalez.jpg',
    'cover': 'driulis-gonzalez-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Driulis_González',
    'medals': [
      { 'year': '1992', 'type': 'B', 'city': 'Barcelona', 'event': 'Olympic Games', 'category': '-57kg' },
      { 'year': '1993', 'type': 'B', 'city': 'Hamilton', 'event': 'World Championships', 'category': '-57kg' }
    
    ],
  },
  {
    'id': '2fa',
    'name': 'Two Factor Authentication',
    'country': 'nl',
    'description': 'If you’re given the option to use two-factor authentication (also known as 2FA) for any of your accounts, you should do; it adds a large amount of security for not much extra effort. 2FA requires two different methods to prove your identity before you can use a service, generally a password plus one other method. This could be a code  sent to your smartphone (or generated from a banks card reader) that you must enter in addition to your password.',
    'image': 'mark-huizinga.jpg',
    'cover': '',
    'link': 'https://en.wikipedia.org/wiki/Mark_Huizinga',
    'medals': [
      { 'year': '1994', 'type': 'B', 'city': 'Gdansk', 'event': 'European Championships', 'category': '-78kg' },
      { 'year': '1996', 'type': 'B', 'city': 'Atlanta', 'event': 'Olympic Games', 'category': '-86kg' },
      { 'year': '1996', 'type': 'G', 'city': 'The Hague', 'event': 'European Championships', 'category': '-86kg' }
    ],
  },
  {
    'id': 'default-password',
    'name': 'Default Password',
    'country': 'uz',
    'description': 'One of the most common mistakes is not changing the manufacturers default passwords that smartphones, laptops, and other types of equipment are issued with. Change all default passwords before using your device. You should also regularly check devices (and software) specifically to detect unchanged default passwords.',
    'image': 'rishod-sobirov.jpg',
    'cover': 'rishod-sobirov-cover.jpg',
    'link': 'https://en.wikipedia.org/wiki/Rishod_Sobirov',
    'medals': [
      { 'year': '2007', 'type': 'S', 'city': 'Kuwait City', 'event': 'Asian Championships', 'category': '-60kg' },
      { 'year': '2008', 'type': 'B', 'city': 'Beijing', 'event': 'Olympic Games', 'category': '-60kg' },
      { 'year': '2010', 'type': 'G', 'city': 'Tokyo', 'event': 'World Championships', 'category': '-60kg' }
    ],
  } 
];

export default athletes;
