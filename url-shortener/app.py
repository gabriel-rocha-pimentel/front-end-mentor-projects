from flask import Flask, jsonify, render_template, request, redirect, url_for
from flask_sqlalchemy import SQLAlchemy
import shortuuid

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///shortlinks.db'
db = SQLAlchemy(app)

class ShortLink(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    original_url = db.Column(db.String(2048), nullable=False)
    shortened_url = db.Column(db.String(50), unique=True, nullable=False)


@app.route('/delete-link/<int:link_id>', methods=['DELETE'])
def delete_link(link_id):
    link = ShortLink.query.get(link_id)
    if link:
        db.session.delete(link)
        db.session.commit()
        return jsonify({"message": "Link excluído com sucesso"})
    else:
        return jsonify({"error": "Link não encontrado"}, 404)
    

@app.route('/', methods=['POST', 'GET'])
def index():
    link = shortLink = ''
    tamanho_da_tela = 0  # Set a default value

    if request.method == 'POST':
        original_url = request.form.get('short_link')
        if original_url:
            short_id = shortuuid.ShortUUID().random(length=7)
            shortened_url = f"https://example.com/{short_id}"
            link_entry = ShortLink(original_url=original_url, shortened_url=shortened_url)
            db.session.add(link_entry)
            db.session.commit()

    # Retrieve all links from the database
    links = ShortLink.query.all()
    
    return render_template('index.html', tamanho_da_tela=tamanho_da_tela, links=links)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
    app.run()
