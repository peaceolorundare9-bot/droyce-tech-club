#!/bin/bash
# Generate premium imagery for Droyce Tech Club
# Visual language: deep charcoal/black, warm bronze light, cinematic editorial

mkdir -p /home/z/my-project/public/images
cd /home/z/my-project/public/images

echo "Generating Droyce Tech Club imagery..."

# 1. Hero background - wide cinematic dark tech scene
z-ai image -p "Cinematic wide shot of a dark futuristic technology lab at night, holographic data screens glowing with warm amber and bronze light, abstract neural network visualization floating in dark space, deep charcoal black atmosphere, premium editorial photography, dramatic rim lighting, sophisticated moody ambiance, high contrast, ultra detailed, no text" -o ./hero.jpg -s 1440x720 &
P1=$!

# 2. Foundation section - professional at work (portrait)
z-ai image -p "Editorial photograph of a focused young professional writing code on a laptop in a dark minimalist studio, screen glow illuminating face with warm bronze tones, deep charcoal background, premium editorial photography, moody cinematic atmosphere, shallow depth of field, high quality, no text" -o ./foundation.jpg -s 864x1152 &
P2=$!

# 3. Experience section - learning session (landscape)
z-ai image -p "Cinematic photograph of a modern technology learning session, silhouettes of professionals gathered around a glowing screen with warm amber light in dark sophisticated studio, premium editorial photography, moody atmospheric lighting, high contrast, high quality, no text" -o ./experience.jpg -s 1152x864 &
P3=$!

# 4. Community - abstract network visualization
z-ai image -p "Abstract visualization of a global digital community network, glowing golden nodes and delicate connection lines in warm bronze tones on deep black background, elegant constellation of data points, premium 3D render, cinematic lighting, sophisticated minimal aesthetic, high quality, no text" -o ./community.jpg -s 1152x864 &
P4=$!

wait $P1 $P2 $P3 $P4
echo "Batch 1 done"

# 5. Committee chair portrait - distinguished professor
z-ai image -p "Distinguished senior professional man portrait, elegant professor with short grey hair and neat grey beard wearing a tailored dark charcoal suit, confident thoughtful expression looking at camera, dark studio background with warm bronze rim lighting, premium editorial portrait photography, cinematic moody lighting, sharp focus on face, high quality" -o ./committee.jpg -s 864x1152 &
P5=$!

# 6. How we operate - architectural structure
z-ai image -p "Minimalist architectural photograph of modern geometric building facade at night, warm amber light lines glowing between dark charcoal panels, premium editorial photography, sophisticated composition, moody atmosphere, strong geometric repetition, high quality, no text" -o ./operate.jpg -s 1152x864 &
P6=$!

# 7. Contact background - dark abstract light streams
z-ai image -p "Abstract dark background with subtle flowing bronze and champagne light streams across deep black, elegant minimal composition, premium cinematic photography, soft gradients, sophisticated and luxurious, high quality, no text" -o ./contact.jpg -s 1440x720 &
P7=$!

wait $P5 $P6 $P7
echo "Batch 2 done"

echo "=== Generated files ==="
ls -la /home/z/my-project/public/images/
