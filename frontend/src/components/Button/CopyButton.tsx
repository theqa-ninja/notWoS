import Button from './Button';
import { ClipboardCopyIcon } from '@heroicons/react/solid';

function CopyButton({ ...rest }) {
  return (
    <Button {...rest}>
      <ClipboardCopyIcon className="w-6 h-6" />
    </Button>
  );
}

export default CopyButton;
