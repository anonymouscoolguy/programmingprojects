---
sidebar_position: 1
tags:
    - easy
    - math
---

import AsciinemaWidget from '@site/src/components/AsciinemaWidget';

# Tip Calculator

<span class="badge badge--success margin-bottom--sm">Beginner-friendly</span>

As usual, [Mr. Krabs](https://en.wikipedia.org/wiki/Eugene_Krabs) is thinking of new ways to maximize his profits. This time, he wants to implement a tip calculator for his restaurant. However, he lacks the technical skills to develop one, so he has decided to ask for help.

## Features

Mr. Krabs wants a very simple tip calculator that meets the following requirements:

- Prompt the user for the meal price and tip as a percentage.
- Output a receipt showing the **meal price**, **tip** and **total price in dollars**.

## Demo Example

<AsciinemaWidget src="https://asciinema.org/a/6DqVqMaLSMcStvatgBnVulb87.cast" rows={15} preload={true} poster="npt:0:9"/>

<div class="margin-top--md">
:::note

In this demo example, a `Python` application was run, but this project is programming language independent. Feel free to use whichever programming language you prefer.

:::
</div>

## Supporting Resources

<details>

<summary>Language-independent hints</summary>

- Consider the following formula for calculating the tip:

$$
\text{tip} = \text{mealPrice} \times \frac{\text{percentage}}{100}
$$

</details>

<details>

<summary>**Python**-specific resources (including sample solution)</summary>

If you are experiencing difficulties, consider taking a look at the [sample solution](https://github.com/anonymouscoolguy/programmingprojects-sample-solutions/blob/main/math/tip_calculator/python/tip_calculator.py).

</details>