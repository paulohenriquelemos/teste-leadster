interface ButtonBranchProps {
  title: string
  active: boolean
  onPress: () => void
}

export function ButtonBranch({ title, onPress, active }: ButtonBranchProps) {
  return (
    <button
      type="button"
      onClick={onPress}
      className={`rounded-full border px-3 py-1 text-sm font-semibold text-text-dark transition
      ${
        active
          ? 'border-primary bg-primary text-white'
          : 'border-text-dark hover:border-primary hover:text-primary'
      }`}
    >
      {title}
    </button>
  )
}
