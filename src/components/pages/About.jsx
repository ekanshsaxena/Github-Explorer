function About() {
  return (
    <div>
      <h1 className='text-3xl font-bold mb-6'>Github Explorer</h1>
      <p className='text-lg'>
        This is a react based application that I developed while practising
        react. You can simply type a username to explore the github profiles
        with those usernames. You can click on the available profiles to further
        explore them.
      </p>
      <div className='inline text-lg text-slate-400 mr-2'>version:</div>
      <div className='inline'>0.0.1</div>
    </div>
  );
}

export default About;
