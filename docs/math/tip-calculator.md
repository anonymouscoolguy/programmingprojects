---
sidebar_position: 1
tags:
    - easy
    - math
---

import AsciinemaWidget from '@site/src/components/AsciinemaWidget';

# Tip Calculator

<span class="badge badge--success margin-bottom--sm">Beginner-friendly</span>

As per usual [Mr. Krabs](https://en.wikipedia.org/wiki/Eugene_Krabs) was thinking of new ways to maximize his profits and this time he wanted to implement a tip calculator for his restaurant, the only problem is that he does not have the technical capabilities to develop one, so he decided to to ask for help.

## Features

Mr. Krabs wants a very simple tip calculator that meets the following requirements:

- Prompt the user for the meal price and tip as a percentage.
- Output the receipt with **meal price**, **tip** and **total price in dollars**.

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

<summary>**Python**-specific hints/resources (including sample solution)</summary>

If you are experiencing difficulties, consider taking a look at the [sample solution](https://github.com/anonymouscoolguy/programmingprojects-sample-solutions/blob/main/math/tip_calculator/python/tip_calculator.py).

</details>