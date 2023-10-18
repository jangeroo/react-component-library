/**
  Example usage:

  import onHover from '<path>/onHover'

  function MyComponent() {
    const [isHovered, setIsHovered] = React.useState(false)

    return <div {...onHover(setIsHovered)} />
  }
*/

const onHover = (toggleFn) => ({
  onMouseEnter: () => toggleFn(true),
  onMouseLeave: () => toggleFn(false)
});

export default onHover;
