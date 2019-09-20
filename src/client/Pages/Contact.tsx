import * as React from 'react';

class Contact extends React.Component<IContactProps, IContactState> {

    constructor(props: IContactProps) {
        super(props);
        this.state = {
            email: '',
            subject: '',
            message: ''
        }
    }

    async handleSubmit() {
        event.preventDefault();
        try {
            await fetch(`/api/contact`, {
                method: "POST",
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(this.state)
            })
            alert('Your Message Was Sent!')
            this.setState({ email: '', subject: '', message: '' })
        } catch (error) {
            console.log(error);
        }
    }




    render() {
        return(
            
            <section className="row">
                <article className="col-12">
                    <form className="form-group border border-dark rounded m-2 p-3">
                        <h3 className="text-center">Contact Us</h3>
                        <label >Email:</label>
                        <input type="text" value={this.state.email} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ email: e.target.value })} className="form-control border-dark"/>
                        <label className="my-2">Subject:</label>
                        <input type="text" value={this.state.subject} onChange={(e: React.ChangeEvent<HTMLInputElement>) => this.setState({ subject: e.target.value })} className="form-control border-dark"/>
                        <label className="my-2">Message:</label>
                        <textarea value={this.state.message} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => this.setState({ message: e.target.value })} className="border-dark rounded" name="" id="" cols= {60} rows={10}></textarea>
                        <button className="btn btn-primary mt-2" onClick={(e: React.MouseEvent<HTMLButtonElement>) => this.handleSubmit()}>Send</button>
                    </form>
                </article>
            </section>
        )
    }
}

interface IContactProps {}

interface IContactState {
    email: string;
    subject: string;
    message: string;
}


export default Contact;