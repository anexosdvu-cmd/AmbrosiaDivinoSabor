import re

with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# 1. Title and meta
lines[5] = '  <meta name="description" content="Ambrosia Divino Sabor - Panadería artesanal de masa madre y pastelería de autor. Elegancia y calidez en cada bocado.">\n'
lines[7] = '  <title>Ambrosia Divino Sabor | Panadería y Pastelería</title>\n'

# 2. Header Nav
for i, line in enumerate(lines):
    if '<li><a href="#banqueteria" class="nav-link">Banquetería</a></li>' in line:
        lines[i] = ''
        break

# 3. Hero
for i, line in enumerate(lines):
    if '<div class="hero-tagline">Panadería, Pastelería & Banquetería</div>' in line:
        lines[i] = '          <div class="hero-tagline">Panadería & Pastelería</div>\n'
    if 'pastelería fina de autor y banquetes elegantes a medida.' in line:
        lines[i] = '            Elaboramos panadería rústica de masa madre y pastelería fina de autor. Un viaje sensorial de sabores nobles diseñado para hacer de cada momento un recuerdo inolvidable.\n'
    if '<a href="#banqueteria" class="btn btn-secondary">Cotizar Banquete</a>' in line:
        lines[i] = ''

# 4. Remove Banqueteria Section
start_idx = -1
end_idx = -1
for i, line in enumerate(lines):
    if 'CATERING & BANQUETERÍA SECTION' in line:
        start_idx = i - 1
    if start_idx != -1 and 'PASTRY SELECTION EXPERIENCE SHOWCASE (Extra)' in line:
        end_idx = i - 1
        break

if start_idx != -1 and end_idx != -1:
    del lines[start_idx:end_idx]

# Refresh lines since indices changed
# 5. Address Contact
for i, line in enumerate(lines):
    if '<p>Avenida El Trigal 8432, Providencia<br>Santiago, Chile</p>' in line:
        lines[i] = '                  <p>Ejército 2154, Barrancas<br>San Antonio</p>\n'
        
# 6. Footer Nav
for i, line in enumerate(lines):
    if '<li><a href="#banqueteria">Banquetería & Eventos</a></li>' in line:
        lines[i] = ''

# 7. Footer address
for i, line in enumerate(lines):
    if '<p>Santiago de Chile.</p>' in line:
        lines[i] = '        <p>San Antonio.</p>\n'

with open('index.html', 'w', encoding='utf-8') as f:
    f.writelines(lines)
