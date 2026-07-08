type ProgressStatus = 'loading' | 'success' | 'error';

function logStatus(status: ProgressStatus) {
  if (status === 'loading') {
    console.log('Loading...');
  } else if (status === 'success') {
    console.log('Success!');
  } else if (status === 'error') {
    console.log('Something went wrong');
  }
}

logStatus('loading');
