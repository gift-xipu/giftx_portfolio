interface PromptProps {
    directory?: string;
    branch?: boolean;
    content: string;
  }
  
  const Prompt = ({ directory, branch = false, content }: PromptProps) => {
    return (
      <p>
        <span className='text-teal-400 font-semibold'>
          ~/giftx{directory}
          <span className="text-success">{branch && " (main)"}</span> $
        </span> {content}</p>
    );
  };
  
  export default Prompt;
  