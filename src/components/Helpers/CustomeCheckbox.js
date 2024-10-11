import { useCheckbox, Chip, VisuallyHidden, tv, cn } from '@nextui-org/react';
import { Circle, CheckCircle } from '@phosphor-icons/react';

const checkbox = tv({
  slots: {
    base: cn(
      'inline-flex max-w-md w-full bg-content1 m-0 items-center justify-start',
      'border border-1 border-white/10 py-5 px-2 md:my-1',
      'data-[selected=true]:border-accent',
    ),
    label: 'w-full',
    content: 'w-full',
  },
  variants: {
    isSelected: {
      true: {
        base: 'bg-accent-500/70 border border-accent-400 rounded-full text-white whitespace-nowrap',
        content: 'text-primary-foreground pl-1',
      },
    },
    isFocusVisible: {
      true: {
        base: 'outline-none ring-0 ring-focus ring-offset-0 ring-offset-background',
      },
    },
  },
});

export const CustomCheckbox = (props) => {
  const { children, isSelected, isFocusVisible, getBaseProps, getLabelProps, getInputProps } = useCheckbox({
    ...props,
  });

  const styles = checkbox({ isSelected, isFocusVisible });

  return (
    <label {...getBaseProps()} className="w-full">
      <VisuallyHidden>
        <input {...getInputProps()} />
      </VisuallyHidden>
      <Chip
        classNames={{
          base: styles.base(),
          content: styles.content(),
        }}
        color='primary'
        startContent={
          isSelected ? (
            <CheckCircle className='text-white w-5 h-5 mr-0.5 ml-1' />
          ) : (
            <Circle className='text-white/40 w-5 h-5 mr-0.5 ml-1' />
          )
        }
        variant='faded'
        {...getLabelProps()}
      >
        {children ? children : isSelected ? 'Enabled' : 'Disabled'}
      </Chip>
    </label>
  );
};
