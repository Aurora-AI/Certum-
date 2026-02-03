---
name: Elysian Foundation
description: Core Python protocols for the Aurora ecosystem, focusing on Object-Oriented Programming (OOP) and Exception Handling.
---

# Elysian Foundation: The Pythonic Bedrock

This skill encapsulates the foundational Python knowledge required for the Elysian SDK, protecting the system from errors and structuring logic through robust Object-Oriented patterns.

## 1. The Art of OOP (Object-Oriented Programming)

In the Aurora ecosystem, we treat everything as an Object. This promotes modularity, reuse, and clear hierarchy.

### 1.1 Class Structure & Encapsulation
Use specific visibility levels to protect sensitive data (e.g., API keys, balances).

```python
class ElysianEntity:
    def __init__(self, name: str, clearance_level: int):
        self.name = name                 # Public: Accessible by anyone
        self._operational_status = True  # Protected: Internal use suggested
        self.__secret_token = None       # Private: Strictly internal

    def get_token(self):
        """Controlled access to private attribute."""
        return self.__secret_token
```

### 1.2 Inheritance & Polymorphism
Extend functionality without rewriting code. Use `super()` to maintain initialization logic.

```python
class Agent(ElysianEntity):
    def perform_action(self):
        raise NotImplementedError("Subclasses must implement this.")

class Sentinel(Agent):
    def perform_action(self):
        return f"{self.name} is scanning for threats."

class Archon(Agent):
    def perform_action(self):
        return f"{self.name} is optimizing the hive mind."

# Polymorphism in action
agents = [Sentinel("Guardian_01", 1), Archon("Overseer_A", 5)]
for agent in agents:
    print(agent.perform_action())
```

### 1.3 Composition
Prefer composition over complex inheritance chains when assembling capabilities.

```python
class Brain:
    def think(self):
        return "Processing logic..."

class Cyborg:
    def __init__(self):
        self.brain = Brain()  # Has-a relationship
    
    def act(self):
        return self.brain.think()
```

## 2. The Art of Failing Elegantly (Exception Handling)

Never let the immediate "crash". Anticipate execution failures and handle them with grace.

### 2.1 The Try/Except Block
Wrap risky operations (I/O, API calls) in `try/except` blocks.

```python
try:
    result = risky_database_operation()
except ConnectionError as e:
    # Handle known error
    log_system(f"Database unavailable: {e}")
    activate_failsafe_mode()
except Exception as e:
    # Catch-all for unexpected crashes
    log_critical(f"Unknown catastrophic failure: {e}")
    raise  # Re-raise if you can't handle it
else:
    # Runs only if NO exception occurred
    commit_transaction(result)
finally:
    # Always runs (cleanup)
    close_connection()
```

### 2.2 Custom Exceptions
Define domain-specific errors for clearer debugging.

```python
class ProtocolViolationError(Exception):
    """Raised when an agent violates Elysian Protocols."""
    pass

def verify_protocol(agent_action):
    if agent_action == "ROGUE":
        raise ProtocolViolationError("Agent attempted rogue action.")
```

## 3. Best Practices

1.  **Explicit is better than implicit:** Be clear about what exceptions you are catching. Avoid bare `except:` unless absolutely necessary at the top level.
2.  **Properties:** Use `@property` getters and setters for validation logic instead of direct attribute access.
3.  **Context Managers:** Always use `with open(...)` or custom context managers for resource handling (files, network connections).
