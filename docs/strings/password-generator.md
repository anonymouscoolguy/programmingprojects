---
sidebar_position: 1
tags:
    - easy
    - strings
---

import AsciinemaWidget from '@site/src/components/AsciinemaWidget';

# Password Generator

<span class="badge badge--success margin-bottom--sm">Beginner-friendly</span>

After attending a cybersecurity seminar, you learned about the risks of reusing the same or similar-looking passwords across multiple platforms. To address this issue, you decided that using a password generator would be the best solution. However, because you don't completely trust online password generators, you chose to create your own software.

## Features

After careful consideration and research you come up with a list of requirements for your application:

- It should prompt the user whether or not he wants to include/exclude **uppercase characters**, **lowercase characters**, **special characters** and/or **digits** in his password.
- It should prompt the user for the length of the password.
- It should be equipped with basic error handling. *What happens if the user does not input what was expected?*

## Demo Example
<AsciinemaWidget src="https://asciinema.org/a/CqssVysO4nivfjfThPXvwESBi.cast" rows={15} preload={true}/>

<div class="margin-top--md">
:::note

In this demo example, a `Python` application was run, but this project is programming language independent. Feel free to use whichever programming language you prefer.

:::
</div>


## Supporting Resources

If you are experiencing some difficulties, don't worry. Take a peek into the supporting resources and reorganize your ideas, good luck! 

<details>

<summary>Language-independent hints</summary>

- Think about constructing a character set with all character groups selected by the user. For example, if the user only wants numbers and special characters your program would **dynamically** create a character set only with numbers and special characters.

- Try to find a library of the programming language you are using that lets you generate random numbers. Then, based on that random number select a character from the character set. Do this as many times as the length requested by the user.

</details>

<details>

<summary>**Python**-specific hints/resources (including sample solution)</summary>

- Take a look at the [string](https://docs.python.org/3/library/string.html) page of Python's standard library. More specifically, at the *String constants* section.

- Consider taking a look at the [random](https://docs.python.org/3/library/random.html) page of Python's standard library, it contains various methods for generating random numbers and retrieving random values from strings/lists. In particular, consider the `random.choices()` method.

---

If you are experiencing some difficulties, consider taking a look at the [sample solution](https://github.com/anonymouscoolguy/programmingprojects-sample-solutions/blob/main/strings/password_generator/python/password_generator.py).
</details>