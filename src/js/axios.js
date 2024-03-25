import axios from 'axios';

export async function sendValues(data) {
  axios.post(
    'https://script.google.com/macros/s/AKfycbwQfPNpDsZK7s3qT5Jt8PBS7B2YnK_ILFqPV65fPhuc7J9jd8vJYz4g8oSnoR0GqPSE/exec',
    data,
    {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
      },
    }
  );
}
