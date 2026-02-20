# Beta Kinetic Physics: The "Ghost in the Machine"

## Core Philosophy
Animation in a high-end interface is not decoration; it is **feedback** and **life**. The interface should feel like a living organism that reacts to the user's presence, not a static page that jumps between states.

## Key Principles (Disney's 12 Principles Applied to UI)

### 1. Squash and Stretch (Elasticity)
*   **Context**: Buttons, cards, and interactive elements.
*   **Application**: When a user clicks, the element should compress slightly (scale: 0.98). When released, it should spring back (scale: 1.02 -> 1.00).
*   **Feeling**: The object has mass and density.

### 2. Anticipation (The "Breath" Before the Act)
*   **Context**: Large transitions or reveal effects.
*   **Application**: Before an element slides in, the container might slightly recede or the opacity might dip.
*   **Feeling**: The interface is "winding up" to serve the user.

### 3. Staging (Focus)
*   **Context**: Page loads or section reveals.
*   **Application**: Don't animate everything at once. Use staggered delays (stagger: 0.1s).
*   **Rule**: Lead the user's eye. IF the headline is the focus, don't distract with a spinning logo in the corner simultaneously.

### 4. Follow Through and Overlapping Action
*   **Context**: Scrolling and Parallax.
*   **Application**: Elements shouldn't stop abruptly. Use `lerp` (Linear Interpolation) for scroll smoothing. When the scroll stops, the content should drift slightly to a halt (inertia).

### 5. Slow In and Slow Out (Easing)
*   **Context**: ALL movement.
*   **Application**: Never use `linear` easing for UI.
    *   *Entrance*: `power3.out` (Fast start, slow settle).
    *   *Exit*: `power2.in` (Slow start, fast exit).
    *   *Natural*: `expo.out` for very smooth, high-end feels.

## The "Ghost Kinetic" Concept
*   **Definition**: Movement that implies an invisible force.
*   **Example**: "Standard drift". Elements floating slightly as if suspended in liquid.
*   **Code Pattern**: `y: sine(time) * amplitude`.

## Actionable Prompts for Animation
*   "Make the entrance feel like heavy velvet curtains opening." (Slow, heavy easing).
*   "The button should feel like a piano key: resistant then responsive."
*   "Scroll should feel like gliding on ice, not scrolling a webpage."
