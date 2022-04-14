import Button from './Button';
import { ClipboardCopyIcon } from '@heroicons/react/solid';
import { CopyButtonProps } from 'types/Button';

function CopyButton({ text, onFailure, onSuccess, ...rest }: CopyButtonProps) {
  function copy() {
    navigator.clipboard.writeText(text).then(
      function () {
        // apply on successful copy
        onSuccess && onSuccess();
      },
      function () {
        // apply on failure to copy
        onFailure && onFailure();
      }
    );
  }
  return (
    <Button {...rest} iconOnly onClick={copy}>
      <ClipboardCopyIcon className="w-6 h-6" />
    </Button>
  );
}

export default CopyButton;
